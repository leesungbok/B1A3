package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Like;

public interface LikeService {
  List<Like> getLikeList(int memberNo) throws Exception;
  List<Like> getrecentList(int memberNo) throws Exception;
  int add(Like like) throws Exception;
  int delete(int likeNo, int memberNo) throws Exception;
  int update(Like like) throws Exception;
  int recentDelete(int likeNo, int memberNo) throws Exception;
  String check(int memberNo, int itemNo) throws Exception;
}