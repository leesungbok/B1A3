package bitcamp.java89.ems.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.MemberDao;
import bitcamp.java89.ems.domain.Member;
import bitcamp.java89.ems.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  
  public Member getMemberInfo(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Member member = memberDao.getOneByEmailPassword(paramMap);
    if (member == null) {
      return null;
    }
    return member;
  }

  @Override
  public Member getOneBySNS(String type, String snsId) throws Exception {
    if (type.equals("kakao")) {
      return memberDao.getOneByKakao(snsId);
    } else if(type.equals("fcbk")) {
      return memberDao.getOneByFacebook(snsId);
    } else {
      return null;
    }
  }
}