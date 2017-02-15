package ems.control.service;

import java.util.List;

import ems.control.domain.Member;

public interface MemberService {
  List<Member> getList() throws Exception;
  Member getDetail(int no) throws Exception;
  int add(Member member) throws Exception;
  int delete(int no) throws Exception;
  int update(Member member) throws Exception;
}
















