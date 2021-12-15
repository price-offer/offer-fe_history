import React, { useState, useEffect, useCallback } from 'react'
import Avatar from '@components/templates/Avatar'
import MessageBox from '@components/templates/Message'
import TextArea from '@components/templates/Textarea'
import IconButton from '@components/templates/IconButton'
import { FETCH } from '@utils/constant/icon'
import { messageApi } from '@api/apis'
import Image from '@components/templates/Image'

const fetchImgurl = FETCH

export const getServerSideProps = async context => {
  return {
    props: {
      userId: context.query.id,
    },
  }
}

const MessagePage = ({ userId }) => {
  const [messageBoxList, setMessageBoxList] = useState(null)
  const [currentPage, setcurrentPage] = useState(1)
  const [messageList, setMessageList] = useState(null)
  const [messageRoomInfo, setMessageRoomInfo] = useState(null)

  const fetchMessageBox = useCallback(async () => {
    const { data } = await messageApi.getMessageBox

    setMessageBoxList(data.elements || null)
  }, [])

  const fetchSelectedMessageRoom = useCallback(async messageRoomId => {
    const roomInfoRes = await messageApi.getMessageRoomInfo({ messageRoomId })
    const messageListRes = await messageApi.getMessageList({
      messageRoomId,
      params: {
        page: 1,
        size: 10,
      },
    })

    setMessageRoomInfo(() => roomInfoRes.data)
    setMessageList(() => messageListRes.data.elements)
  }, [])

  useEffect(() => {
    fetchMessageBox()
  }, [])

  const printList =
    messageList &&
    messageList.map(message =>
      message.isSendMessage ? (
        <div className="message-chat_seller">
          <Avatar
            className="message-avatar"
            src={messageRoomInfo.messagePartnerInfo.profileImageUrl}
            alt="avatar"
          />
          <div className="chat-wrapper">
            <div className="message-wrapper">
              <div className="message-chat_box-wrapper">
                <MessageBox className="message-chat_box">
                  {message.content}
                </MessageBox>
              </div>
              {/* <div className="message-chat_box-wrapper">
              <MessageBox className="message-chat_box">잠시만요~</MessageBox>
            </div> */}
            </div>
            <span className="message-time">{message.createdDate}</span>
          </div>
        </div>
      ) : (
        <div className="message-chat_buyer">
          <div className="chat-wrapper">
            <span className="message-time">{message.createdDate}</span>
            <div className="message-wrapper">
              <MessageBox className="message-chat_box">
                {message.content}
              </MessageBox>
            </div>
          </div>
        </div>
      ),
    )

  return (
    <div className="message">
      <div className="message-list-wrapper">
        <div className="message-header">
          <h2 className="message-header-title">히텧님의 쪽지함</h2>
        </div>
        <div className="message-body">
          <div className="message-list">
            {messageBoxList &&
              messageBoxList.map(messageBox => (
                <div
                  className="message-item"
                  key={messageBox.messageRoomId}
                  onClick={() =>
                    fetchSelectedMessageRoom(messageBox.messageRoomId)
                  }>
                  <div className="message-item_left">
                    <Avatar
                      className="message-avatar"
                      src={messageBox.userInfo.profileImageUrl}
                      alt="avatar"
                    />
                    <div className="message-item_info-wrapper">
                      <p className="message-item_info">
                        <span className="message-item_info-name">
                          {messageBox.userInfo.nickName}
                        </span>
                        <span className="message-item_info-meta">
                          {messageBox.userInfo.address} · 2분전
                        </span>
                      </p>
                      <p className="message-item_text">
                        {messageBox.message.content}
                      </p>
                    </div>
                  </div>
                  <Image
                    className="message-product"
                    src={messageBox.productImageUrl}
                    alt="product"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="message-chat-wrapper">
        {messageList && messageRoomInfo && (
          <>
            <div className="message-header chat">
              <h2 className="message-header-title">
                {messageRoomInfo.messagePartnerInfo.nickName}과의 쪽지
              </h2>
              <IconButton src={fetchImgurl} alt="fetch" />
            </div>
            <div className="message-body">
              <div className="message-chat_info">
                <img
                  className="message-product"
                  src="https://picsum.photos/100"
                  alt="product"
                />
                <div className="message-product_info">
                  <span className="message-product_info-title">
                    {messageRoomInfo.articleInfo.title}
                  </span>
                  <p className="message-product_info-price">
                    <span className="message-product_info-default">
                      {messageRoomInfo.articleInfo.price}
                    </span>
                    <span className="message-product_info-offer">
                      (제안가: {messageRoomInfo.articleInfo.offerPrice}
                      원)
                    </span>
                  </p>
                </div>
              </div>
              <div className="message-chat_cont">
                <div className="message-chat">{messageList && printList}</div>
                <div className="message-textarea-wrapper">
                  <TextArea
                    placeholder="메시지를 입력해주세요."
                    className="message-textarea"
                  />
                  <div className="message-limit_box">
                    <div className="message-limit_text">
                      <span className="message-limit_current">0</span>
                      <span>/ 100</span>
                    </div>
                    <button>전송</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MessagePage
