package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Like;

public interface LikeService {
  List<Like> getLikeList(int memberNo) throws Exception;
  int add(Like like) throws Exception;
  int delete(int likeNo) throws Exception;
}
