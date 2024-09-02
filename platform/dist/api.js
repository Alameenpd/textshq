"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const network_api_1 = __importDefault(require("./network-api"));
class Instagram {
    accountInfo;
    api;
    loginEventCallback;
    constructor() {
        this.api = new network_api_1.default();
    }
    init = async (session, accountInfo, prefs, config) => {
        this.accountInfo = accountInfo;
        if (config?.proxyConfig) {
            this.api.setProxy(config.proxyConfig);
        }
        if (session) {
            await this.api.setSession(session);
        }
    };
    dispose = async () => {
        await this.api.logout();
    };
    getCurrentUser = async () => {
        return this.api.getCurrentUser();
    };
    login = async (creds) => {
        return this.api.login(creds);
    };
    logout = async () => {
        await this.api.logout();
    };
    serializeSession = () => {
        return this.api.serializeSession();
    };
    subscribeToEvents = async (onEvent) => {
        this.api.subscribeToEvents(onEvent);
    };
    onLoginEvent = (onEvent) => {
        this.loginEventCallback = onEvent;
    };
    onConnectionStateChange = async (onEvent) => {
        this.api.onConnectionStateChange(onEvent);
    };
    takeoverConflict = async () => {
        await this.api.takeoverConflict();
    };
    searchUsers = async (typed) => {
        return this.api.searchUsers(typed);
    };
    searchThreads = async (typed) => {
        return this.api.searchThreads(typed);
    };
    searchMessages = async (typed, pagination, options) => {
        return this.api.searchMessages(typed, pagination, options);
    };
    getPresence = async () => {
        return this.api.getPresence();
    };
    getCustomEmojis = async () => {
        return this.api.getCustomEmojis();
    };
    getThreads = async (folderName, pagination) => {
        return this.api.getThreads(folderName, pagination);
    };
    getMessages = async (threadID, pagination) => {
        return this.api.getMessages(threadID, pagination);
    };
    getThreadParticipants = async (threadID, pagination) => {
        return this.api.getThreadParticipants(threadID, pagination);
    };
    getThread = async (threadID) => {
        return this.api.getThread(threadID);
    };
    getMessage = async (messageID) => {
        return this.api.getMessage(messageID);
    };
    getUser = async (ids) => {
        return this.api.getUser(ids);
    };
    createThread = async (userIDs, title, messageText) => {
        return this.api.createThread(userIDs, title, messageText);
    };
    updateThread = async (threadID, updates) => {
        await this.api.updateThread(threadID, updates);
    };
    deleteThread = async (threadID) => {
        await this.api.deleteThread(threadID);
    };
    reportThread = async (type, threadID, firstMessageID) => {
        return this.api.reportThread(type, threadID, firstMessageID);
    };
    sendMessage = async (threadID, content, options) => {
        return this.api.sendMessage(threadID, content, options);
    };
    editMessage = async (threadID, messageID, content, options) => {
        return this.api.editMessage(threadID, messageID, content, options);
    };
    forwardMessage = async (threadID, messageID, threadIDs, userIDs) => {
        await this.api.forwardMessage(threadID, messageID, threadIDs, userIDs);
    };
    sendActivityIndicator = async (type, threadID) => {
        await this.api.sendActivityIndicator(type, threadID);
    };
    deleteMessage = async (threadID, messageID, forEveryone) => {
        await this.api.deleteMessage(threadID, messageID, forEveryone);
    };
    sendReadReceipt = async (threadID, messageID, messageCursor) => {
        await this.api.sendReadReceipt(threadID, messageID, messageCursor);
    };
    addReaction = async (threadID, messageID, reactionKey) => {
        await this.api.addReaction(threadID, messageID, reactionKey);
    };
    removeReaction = async (threadID, messageID, reactionKey) => {
        await this.api.removeReaction(threadID, messageID, reactionKey);
    };
    getLinkPreview = async (link) => {
        return this.api.getLinkPreview(link);
    };
    addParticipant = async (threadID, participantID) => {
        await this.api.addParticipant(threadID, participantID);
    };
    removeParticipant = async (threadID, participantID) => {
        await this.api.removeParticipant(threadID, participantID);
    };
    changeParticipantRole = async (threadID, participantID, role) => {
        await this.api.changeParticipantRole(threadID, participantID, role);
    };
    changeThreadImage = async (threadID, imageBuffer, mimeType) => {
        await this.api.changeThreadImage(threadID, imageBuffer, mimeType);
    };
    markAsUnread = async (threadID, messageID) => {
        await this.api.markAsUnread(threadID, messageID);
    };
    archiveThread = async (threadID, archived) => {
        await this.api.archiveThread(threadID, archived);
    };
    pinThread = async (threadID, pinned) => {
        await this.api.pinThread(threadID, pinned);
    };
    notifyAnyway = async (threadID) => {
        await this.api.notifyAnyway(threadID);
    };
    onThreadSelected = async (threadID) => {
        await this.api.onThreadSelected(threadID);
    };
    loadDynamicMessage = async (message) => {
        return this.api.loadDynamicMessage(message);
    };
    getAsset = async (_, ...args) => {
        return this.api.getAsset(_, ...args);
    };
    getOriginalObject = async (objName, objectID) => {
        return this.api.getOriginalObject(objName, objectID);
    };
    handleDeepLink = (link) => {
        this.api.handleDeepLink(link);
    };
    onResumeFromSleep = () => {
        this.api.onResumeFromSleep();
    };
    setProxy = (proxyConfig) => {
        this.api.setProxy(proxyConfig);
    };
}
exports.default = Instagram;
