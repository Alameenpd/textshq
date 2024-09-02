"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_proxy_agent_1 = require("https-proxy-agent");
const socks_proxy_agent_1 = require("socks-proxy-agent");
const node_fetch_1 = __importDefault(require("node-fetch"));
class InstagramAPI {
    proxyConfig = null;
    agent = null;
    session = null;
    setProxy(config) {
        this.proxyConfig = config;
        const proxyUrl = `${config.protocol}://${config.auth ? `${config.auth.username}:${config.auth.password}@` : ''}${config.host}:${config.port}`;
        if (config.protocol === 'socks4' || config.protocol === 'socks5') {
            this.agent = new socks_proxy_agent_1.SocksProxyAgent(proxyUrl);
        }
        else {
            this.agent = new https_proxy_agent_1.HttpsProxyAgent(proxyUrl);
        }
    }
    async setSession(session) {
        this.session = session;
    }
    async fetch(url, options = {}) {
        if (this.agent) {
            options.agent = this.agent;
        }
        return (0, node_fetch_1.default)(url, options);
    }
    async getCurrentUser() {
        // Implement Instagram getCurrentUser
        throw new Error('Method not implemented.');
    }
    async login(creds) {
        // Implement Instagram login
        throw new Error('Method not implemented.');
    }
    async logout() {
        // Implement Instagram logout
        throw new Error('Method not implemented.');
    }
    serializeSession() {
        return this.session;
    }
    subscribeToEvents(onEvent) {
        // Implement Instagram event subscription
        throw new Error('Method not implemented.');
    }
    onConnectionStateChange(onEvent) {
        // Implement Instagram connection state change
        throw new Error('Method not implemented.');
    }
    async takeoverConflict() {
        // Implement Instagram takeover conflict
        throw new Error('Method not implemented.');
    }
    async searchUsers(typed) {
        // Implement Instagram user search
        throw new Error('Method not implemented.');
    }
    async searchThreads(typed) {
        // Implement Instagram thread search
        throw new Error('Method not implemented.');
    }
    async searchMessages(typed, pagination, options) {
        // Implement Instagram message search
        throw new Error('Method not implemented.');
    }
    async getPresence() {
        // Implement Instagram presence retrieval
        throw new Error('Method not implemented.');
    }
    async getCustomEmojis() {
        // Implement Instagram custom emoji retrieval
        throw new Error('Method not implemented.');
    }
    async getThreads(folderName, pagination) {
        // Implement Instagram thread retrieval
        throw new Error('Method not implemented.');
    }
    async getMessages(threadID, pagination) {
        // Implement Instagram message retrieval
        throw new Error('Method not implemented.');
    }
    async getThreadParticipants(threadID, pagination) {
        // Implement Instagram thread participant retrieval
        throw new Error('Method not implemented.');
    }
    async getThread(threadID) {
        // Implement Instagram thread retrieval
        throw new Error('Method not implemented.');
    }
    async getMessage(messageID) {
        // Implement Instagram message retrieval
        throw new Error('Method not implemented.');
    }
    async getUser(ids) {
        // Implement Instagram user retrieval
        throw new Error('Method not implemented.');
    }
    async createThread(userIDs, title, messageText) {
        // Implement Instagram thread creation
        throw new Error('Method not implemented.');
    }
    async updateThread(threadID, updates) {
        // Implement Instagram thread update
        throw new Error('Method not implemented.');
    }
    async deleteThread(threadID) {
        // Implement Instagram thread deletion
        throw new Error('Method not implemented.');
    }
    async reportThread(type, threadID, firstMessageID) {
        // Implement Instagram thread reporting
        throw new Error('Method not implemented.');
    }
    async sendMessage(threadID, content, options) {
        // Implement Instagram message sending
        throw new Error('Method not implemented.');
    }
    async editMessage(threadID, messageID, content, options) {
        // Implement Instagram message editing
        throw new Error('Method not implemented.');
    }
    async forwardMessage(threadID, messageID, threadIDs, userIDs) {
        // Implement Instagram message forwarding
        throw new Error('Method not implemented.');
    }
    async sendActivityIndicator(type, threadID) {
        // Implement Instagram activity indicator sending
        throw new Error('Method not implemented.');
    }
    async deleteMessage(threadID, messageID, forEveryone) {
        // Implement Instagram message deletion
        throw new Error('Method not implemented.');
    }
    async sendReadReceipt(threadID, messageID, messageCursor) {
        // Implement Instagram read receipt sending
        throw new Error('Method not implemented.');
    }
    async addReaction(threadID, messageID, reactionKey) {
        // Implement Instagram reaction adding
        throw new Error('Method not implemented.');
    }
    async removeReaction(threadID, messageID, reactionKey) {
        // Implement Instagram reaction removal
        throw new Error('Method not implemented.');
    }
    async getLinkPreview(link) {
        // Implement Instagram link preview retrieval
        throw new Error('Method not implemented.');
    }
    async addParticipant(threadID, participantID) {
        // Implement Instagram participant addition
        throw new Error('Method not implemented.');
    }
    async removeParticipant(threadID, participantID) {
        // Implement Instagram participant removal
        throw new Error('Method not implemented.');
    }
    async changeParticipantRole(threadID, participantID, role) {
        // Implement Instagram participant role change
        throw new Error('Method not implemented.');
    }
    async changeThreadImage(threadID, imageBuffer, mimeType) {
        // Implement Instagram thread image change
        throw new Error('Method not implemented.');
    }
    async markAsUnread(threadID, messageID) {
        // Implement Instagram thread marking as unread
        throw new Error('Method not implemented.');
    }
    async archiveThread(threadID, archived) {
        // Implement Instagram thread archiving
        throw new Error('Method not implemented.');
    }
    async pinThread(threadID, pinned) {
        // Implement Instagram thread pinning
        throw new Error('Method not implemented.');
    }
    async notifyAnyway(threadID) {
        // Implement Instagram notification override
        throw new Error('Method not implemented.');
    }
    async onThreadSelected(threadID) {
        // Implement Instagram thread selection handling
        throw new Error('Method not implemented.');
    }
    async loadDynamicMessage(message) {
        // Implement Instagram dynamic message loading
        throw new Error('Method not implemented.');
    }
    async getAsset(_, ...args) {
        // Implement Instagram asset retrieval
        throw new Error('Method not implemented.');
    }
    async getOriginalObject(objName, objectID) {
        // Implement Instagram original object retrieval
        throw new Error('Method not implemented.');
    }
    handleDeepLink(link) {
        // Implement Instagram deep link handling
        throw new Error('Method not implemented.');
    }
    onResumeFromSleep() {
        // Implement Instagram resume from sleep handling
        throw new Error('Method not implemented.');
    }
}
exports.default = InstagramAPI;
