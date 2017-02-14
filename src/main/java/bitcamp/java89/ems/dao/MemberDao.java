package bitcamp.java89.ems.dao;

import bitcamp.java89.ems.domain.Member;

public interface MemberDao {
  int insert(Member member) throws Exception;
  int countEmail(String email) throws Exception;
  int countNickName(String nickName) throws Exception;
  int countPhone(String phoneNo) throws Exception;
}