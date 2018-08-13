class MemberService {
  async join(member) {
    return member.tryDM('Please message money_martiney#4317 to setup an interview.');
  }
}

module.exports = new MemberService();
