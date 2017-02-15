package ems.control.service;

import ems.control.domain.Member;

public interface AuthService {
  Member getMemberInfo(String email, String password, String facebook,String kakao, String naver) throws Exception;
}
