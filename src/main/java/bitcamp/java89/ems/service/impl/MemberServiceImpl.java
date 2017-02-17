package bitcamp.java89.ems.service.impl;

import java.util.HashMap;
import java.util.Map;

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

  @Override
  public int count(String type, String data) throws Exception {
    if (type.equals("email")) {
      return memberDao.countEmail(data);
    } else if (type.equals("nickName")) {
      return memberDao.countNickName(data);
    } else /* (type.equals("phoneNo")) */ {
      return memberDao.countPhone(data);
    }
  }

  @Override
  public int updatePhoto(String email, String photoPath) throws Exception {
    Map<String, String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("photoPath", photoPath);
    return memberDao.updatePhoto(paramMap);
  }

  @Override
  public int delete(int memberNo) throws Exception {
    return memberDao.delete(memberNo);
  }

  @Override
  public Member getOne(int memberNo) throws Exception {
    return memberDao.getOneByMemberNo(memberNo);
  }
}