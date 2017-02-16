package bitcamp.java89.ems.service;

import bitcamp.java89.ems.domain.Member;

public interface AuthService {
  Member getMemberInfo(String email, String password) throws Exception;
}
