package bitcamp.java89.ems.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java89.ems.domain.Member;

public interface MemberDao {
  int insert(Member member) throws Exception;
  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
  Member getOneByMemberNo(int memberNo) throws Exception;
  Member getOneByKakao(String kakaoId) throws Exception;
  Member getOneByFacebook(String kakaoId) throws Exception;
  String getPhoneByNickName(String nickName) throws Exception;
  int update(Member member) throws Exception;
  int updatePhoto(Map<String,Object> paramMap) throws Exception;
  int delete(int memberNo) throws Exception;
  List<Member> getSearchMember(HashMap<String, String> paramMap)throws Exception;
}