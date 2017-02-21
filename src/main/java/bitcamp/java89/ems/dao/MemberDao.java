package bitcamp.java89.ems.dao;

import java.util.Map;

import bitcamp.java89.ems.domain.Member;

public interface MemberDao {
  int insert(Member member) throws Exception;
  int countEmail(String email) throws Exception;
  int countNickName(String nickName) throws Exception;
  int countPhone(String phoneNo) throws Exception;
  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
  Member getOneByMemberNo(int memberNo) throws Exception;
  Member getOneByKakao(String kakaoId) throws Exception;
  int updatePhoto(Map<String,String> paramMap) throws Exception;
  int delete(int memberNo) throws Exception;
}