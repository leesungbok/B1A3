package bitcamp.java89.ems.dao;

import bitcamp.java89.ems.domain.Member;

public interface MemberDao {
  int insert(Member member) throws Exception;
}