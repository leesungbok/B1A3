package bitcamp.java89.ems.service;

import bitcamp.java89.ems.domain.Member;

public interface MemberService {
  int add(Member member) throws Exception;
  int count(String type, String data) throws Exception;
}