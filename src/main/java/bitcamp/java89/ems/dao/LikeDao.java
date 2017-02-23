package bitcamp.java89.ems.dao;

import java.util.ArrayList;

import bitcamp.java89.ems.domain.Like;

public interface LikeDao {
  ArrayList<Like> getLikeList() throws Exception;
  int insert(Like like) throws Exception;
  int delete(int likeNo) throws Exception;

}
