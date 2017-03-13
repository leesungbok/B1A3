package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Member;

public interface MemberService {
  int add(Member member) throws Exception;
  int update(Member member) throws Exception;
  int updatePhoto(int memberNo, String photoPath) throws Exception;
  int delete(int memberNo) throws Exception;
  Member getOne(int memberNo) throws Exception;
  String getPhone(String nickName) throws Exception;
  List<Member> getSearchMember(String nickName) throws Exception;
}