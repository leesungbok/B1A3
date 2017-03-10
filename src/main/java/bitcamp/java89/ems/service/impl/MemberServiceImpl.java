package bitcamp.java89.ems.service.impl;

import java.util.HashMap;
import java.util.List;
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
  public int update(Member member) throws Exception {
    return memberDao.update(member);
  }

  @Override
  public int updatePhoto(int memberNo, String photoPath) throws Exception {
    Map<String, Object> paramMap = new HashMap<>();
    paramMap.put("memberNo", memberNo);
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

  @Override
  public String getPhone(String nickName) throws Exception {
    return memberDao.getPhoneByNickName(nickName);
  }
  
  @Override
  public List<Member> getSearchMember(String nickName) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("nickName", nickName); 
    List<Member> member = memberDao.getSearchMember(paramMap);
    if (member == null) {
      return null;
      
    }
    return member;
  }
}