package bitcamp.java89.ems.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems.domain.Like;

public interface LikeDao {
  ArrayList<Like> getLikeList(int memberNo) throws Exception;
  int insert(Like like) throws Exception;
  int delete(int likeNo) throws Exception;
  String getOneLike(Map<String,Object> paramMap) throws Exception;

}
