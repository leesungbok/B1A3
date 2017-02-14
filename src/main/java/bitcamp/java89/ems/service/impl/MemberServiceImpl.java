package bitcamp.java89.ems.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.MemberDao;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
  @Autowired MemberDao memberDao;

  @Override
  public int add(Member member) throws Exception {
    return memberDao.insert(member);
  }
}