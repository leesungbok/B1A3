package bitcamp.java89.ems.dao;

import java.util.Map;

import bitcamp.java89.ems.domain.Member;

public interface MemberDao {
  int insert(Member member) throws Exception;
  int countEmail(String email) throws Exception;
  int countNickName(String nickName) throws Exception;
  int countPhone(String phoneNo) throws Exception;
  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
}