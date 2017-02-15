package ems.control.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ems.control.dao.MemberDao;
import ems.control.domain.Member;
import ems.control.service.AuthService;


@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  
  
  public Member getMemberInfo(String email, String password, String facebook,String kakao, String naver) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Member member = memberDao.getOneByEmailPassword(paramMap);
    
    if (member == null) {
      return null;
    } else {
      return memberDao.getOne(member.getMemberNo());
    }
  }
}
