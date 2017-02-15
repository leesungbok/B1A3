package ems.control.dao;

import java.util.ArrayList;
import java.util.Map;

import ems.control.domain.Member;

public interface MemberDao {
  ArrayList<Member> getList() throws Exception;
  int countByNo(int memberNo) throws Exception;
  int count(String email) throws Exception;
  int insert(Member member) throws Exception;
  int update(Member member) throws Exception;
  int delete(int memberNo) throws Exception;
  Member getlist(int memberNo) throws Exception;
  Member getOne(int memberNo) throws Exception;
  Member getOne(String email) throws Exception;
  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;

}
