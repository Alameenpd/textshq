import { ActivityType, CurrentUser, CustomEmojiMap, FetchInfo, LoginCreds, LoginResult, Message, MessageContent, MessageLink, MessageSendOptions, OnConnStateChangeCallback, OnServerEventCallback, Paginated, PaginationArg, Participant, PlatformAPI, PresenceMap, SearchMessageOptions, Thread, User, ProxyConfig, PlatformConfig } from '@textshq/platform-sdk';
import type { Readable } from 'stream';
export default class Instagram implements PlatformAPI {
    private api;
    private loginEventCallback;
    constructor();
    init: (session?: any, prefs?: Record<string, any>, config?: PlatformConfig) => Promise<void>;
    dispose: () => Promise<void>;
    getCurrentUser: () => Promise<CurrentUser>;
    login: (creds?: LoginCreds) => Promise<LoginResult>;
    logout: () => Promise<void>;
    serializeSession: () => any;
    subscribeToEvents: (onEvent: OnServerEventCallback) => Promise<void>;
    onLoginEvent: (onEvent: (data: any) => void) => void;
    onConnectionStateChange: (onEvent: OnConnStateChangeCallback) => Promise<void>;
    takeoverConflict: () => Promise<void>;
    searchUsers: (typed: string) => Promise<User[]>;
    searchThreads: (typed: string) => Promise<Thread[]>;
    searchMessages: (typed: string, pagination?: PaginationArg, options?: SearchMessageOptions) => Promise<Paginated<Message>>;
    getPresence: () => Promise<PresenceMap>;
    getCustomEmojis: () => Promise<CustomEmojiMap>;
    getThreads: (folderName: string, pagination?: PaginationArg) => Promise<Paginated<Thread>>;
    getMessages: (threadID: string, pagination?: PaginationArg) => Promise<Paginated<Message>>;
    getThreadParticipants: (threadID: string, pagination?: PaginationArg) => Promise<Paginated<Participant>>;
    getThread: (threadID: string) => Promise<Thread>;
    getMessage: (messageID: string) => Promise<Message>;
    getUser: (ids: {
        userID?: string;
        username?: string;
        phoneNumber?: string;
        email?: string;
    }) => Promise<User>;
    createThread: (userIDs: string[], title?: string, messageText?: string) => Promise<boolean | Thread>;
    updateThread: (threadID: string, updates: Partial<Thread>) => Promise<void>;
    deleteThread: (threadID: string) => Promise<void>;
    reportThread: (type: "spam", threadID: string, firstMessageID?: string) => Promise<boolean>;
    sendMessage: (threadID: string, content: MessageContent, options?: MessageSendOptions) => Promise<boolean | Message[]>;
    editMessage: (threadID: string, messageID: string, content: MessageContent, options?: MessageSendOptions) => Promise<boolean | Message[]>;
    forwardMessage: (threadID: string, messageID: string, threadIDs?: string[], userIDs?: string[]) => Promise<void>;
    sendActivityIndicator: (type: ActivityType, threadID?: string) => Promise<void>;
    deleteMessage: (threadID: string, messageID: string, forEveryone?: boolean) => Promise<void>;
    sendReadReceipt: (threadID: string, messageID: string, messageCursor?: string) => Promise<void>;
    addReaction: (threadID: string, messageID: string, reactionKey: string) => Promise<void>;
    removeReaction: (threadID: string, messageID: string, reactionKey: string) => Promise<void>;
    getLinkPreview: (link: string) => Promise<MessageLink>;
    addParticipant: (threadID: string, participantID: string) => Promise<void>;
    removeParticipant: (threadID: string, participantID: string) => Promise<void>;
    changeParticipantRole: (threadID: string, participantID: string, role: string) => Promise<void>;
    changeThreadImage: (threadID: string, imageBuffer: Buffer, mimeType: string) => Promise<void>;
    markAsUnread: (threadID: string, messageID?: string) => Promise<void>;
    archiveThread: (threadID: string, archived: boolean) => Promise<void>;
    pinThread: (threadID: string, pinned: boolean) => Promise<void>;
    notifyAnyway: (threadID: string) => Promise<void>;
    onThreadSelected: (threadID: string) => Promise<void>;
    loadDynamicMessage: (message: Message) => Promise<Partial<Message>>;
    getAsset: (_: any, ...args: string[]) => Promise<string | Buffer | FetchInfo | Readable>;
    getOriginalObject: (objName: "thread" | "message", objectID: string) => Promise<string>;
    handleDeepLink: (link: string) => void;
    onResumeFromSleep: () => void;
    setProxy: (proxyConfig: ProxyConfig) => void;
}
