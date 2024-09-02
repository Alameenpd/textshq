import { ActivityType, Awaitable, CurrentUser, CustomEmojiMap, FetchInfo, LoginCreds, LoginResult, Message, MessageContent, MessageLink, MessageSendOptions, OnConnStateChangeCallback, OnServerEventCallback, Paginated, PaginationArg, Participant, PlatformAPI, PresenceMap, SearchMessageOptions, texts, Thread, User, ProxyConfig, PlatformConfig } from '@textshq/platform-sdk'
import type { Readable } from 'stream'
import InstagramAPI from './network-api'

export default class Instagram implements PlatformAPI {
  private api: InstagramAPI

  private loginEventCallback: (data: any) => void

  constructor() {
    this.api = new InstagramAPI()
  }

  init = async (session?: any, prefs?: Record<string, any>, config?: PlatformConfig) => {
    if (config?.proxyConfig) {
      this.api.setProxy(config.proxyConfig)
    }
    if (session) {
      await this.api.setSession(session)
    }
  }

  dispose = async () => {
    await this.api.logout()
  }

  getCurrentUser = async (): Promise<CurrentUser> => this.api.getCurrentUser()

  login = async (creds?: LoginCreds): Promise<LoginResult> => this.api.login(creds)

  logout = async () => {
    await this.api.logout()
  }

  serializeSession = () => this.api.serializeSession()

  subscribeToEvents = async (onEvent: OnServerEventCallback) => {
    this.api.subscribeToEvents(onEvent)
  }

  onLoginEvent = (onEvent: (data: any) => void) => {
    this.loginEventCallback = onEvent
  }

  onConnectionStateChange = async (onEvent: OnConnStateChangeCallback) => {
    this.api.onConnectionStateChange(onEvent)
  }

  takeoverConflict = async () => {
    await this.api.takeoverConflict()
  }

  searchUsers = async (typed: string): Promise<User[]> => this.api.searchUsers(typed)

  searchThreads = async (typed: string): Promise<Thread[]> => this.api.searchThreads(typed)

  searchMessages = async (typed: string, pagination?: PaginationArg, options?: SearchMessageOptions): Promise<Paginated<Message>> => this.api.searchMessages(typed, pagination, options)

  getPresence = async (): Promise<PresenceMap> => this.api.getPresence()

  getCustomEmojis = async (): Promise<CustomEmojiMap> => this.api.getCustomEmojis()

  getThreads = async (folderName: string, pagination?: PaginationArg): Promise<Paginated<Thread>> => this.api.getThreads(folderName, pagination)

  getMessages = async (threadID: string, pagination?: PaginationArg): Promise<Paginated<Message>> => this.api.getMessages(threadID, pagination)

  getThreadParticipants = async (threadID: string, pagination?: PaginationArg): Promise<Paginated<Participant>> => this.api.getThreadParticipants(threadID, pagination)

  getThread = async (threadID: string): Promise<Thread> => this.api.getThread(threadID)

  getMessage = async (messageID: string): Promise<Message> => this.api.getMessage(messageID)

  getUser = async (ids: { userID?: string, username?: string, phoneNumber?: string, email?: string }): Promise<User> => this.api.getUser(ids)

  createThread = async (userIDs: string[], title?: string, messageText?: string): Promise<boolean | Thread> => this.api.createThread(userIDs, title, messageText)

  updateThread = async (threadID: string, updates: Partial<Thread>): Promise<void> => {
    await this.api.updateThread(threadID, updates)
  }

  deleteThread = async (threadID: string): Promise<void> => {
    await this.api.deleteThread(threadID)
  }

  reportThread = async (type: 'spam', threadID: string, firstMessageID?: string): Promise<boolean> => this.api.reportThread(type, threadID, firstMessageID)

  sendMessage = async (threadID: string, content: MessageContent, options?: MessageSendOptions): Promise<boolean | Message[]> => this.api.sendMessage(threadID, content, options)

  editMessage = async (threadID: string, messageID: string, content: MessageContent, options?: MessageSendOptions): Promise<boolean | Message[]> => this.api.editMessage(threadID, messageID, content, options)

  forwardMessage = async (threadID: string, messageID: string, threadIDs?: string[], userIDs?: string[]): Promise<void> => {
    await this.api.forwardMessage(threadID, messageID, threadIDs, userIDs)
  }

  sendActivityIndicator = async (type: ActivityType, threadID?: string): Promise<void> => {
    await this.api.sendActivityIndicator(type, threadID)
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone?: boolean): Promise<void> => {
    await this.api.deleteMessage(threadID, messageID, forEveryone)
  }

  sendReadReceipt = async (threadID: string, messageID: string, messageCursor?: string): Promise<void> => {
    await this.api.sendReadReceipt(threadID, messageID, messageCursor)
  }

  addReaction = async (threadID: string, messageID: string, reactionKey: string): Promise<void> => {
    await this.api.addReaction(threadID, messageID, reactionKey)
  }

  removeReaction = async (threadID: string, messageID: string, reactionKey: string): Promise<void> => {
    await this.api.removeReaction(threadID, messageID, reactionKey)
  }

  getLinkPreview = async (link: string): Promise<MessageLink> => this.api.getLinkPreview(link)

  addParticipant = async (threadID: string, participantID: string): Promise<void> => {
    await this.api.addParticipant(threadID, participantID)
  }

  removeParticipant = async (threadID: string, participantID: string): Promise<void> => {
    await this.api.removeParticipant(threadID, participantID)
  }

  changeParticipantRole = async (threadID: string, participantID: string, role: string): Promise<void> => {
    await this.api.changeParticipantRole(threadID, participantID, role)
  }

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string): Promise<void> => {
    await this.api.changeThreadImage(threadID, imageBuffer, mimeType)
  }

  markAsUnread = async (threadID: string, messageID?: string): Promise<void> => {
    await this.api.markAsUnread(threadID, messageID)
  }

  archiveThread = async (threadID: string, archived: boolean): Promise<void> => {
    await this.api.archiveThread(threadID, archived)
  }

  pinThread = async (threadID: string, pinned: boolean): Promise<void> => {
    await this.api.pinThread(threadID, pinned)
  }

  notifyAnyway = async (threadID: string): Promise<void> => {
    await this.api.notifyAnyway(threadID)
  }

  onThreadSelected = async (threadID: string): Promise<void> => {
    await this.api.onThreadSelected(threadID)
  }

  loadDynamicMessage = async (message: Message): Promise<Partial<Message>> => this.api.loadDynamicMessage(message)

  getAsset = async (_: any, ...args: string[]): Promise<string | Buffer | FetchInfo | Readable> => this.api.getAsset(_, ...args)

  getOriginalObject = async (objName: 'thread' | 'message', objectID: string): Promise<string> => this.api.getOriginalObject(objName, objectID)

  handleDeepLink = (link: string): void => {
    this.api.handleDeepLink(link)
  }

  onResumeFromSleep = (): void => {
    this.api.onResumeFromSleep()
  }

  setProxy = (proxyConfig: ProxyConfig): void => {
    this.api.setProxy(proxyConfig)
  }
}
