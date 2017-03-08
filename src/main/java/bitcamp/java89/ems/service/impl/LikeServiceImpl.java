package bitcamp.java89.ems.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.LikeDao;
import bitcamp.java89.ems.domain.Like;
import bitcamp.java89.ems.service.LikeService;

@Service
public class LikeServiceImpl implements LikeService {
  @Autowired LikeDao likeDao;

  @Override
  public int add(Like like) throws Exception {
    int count = likeDao.insert(like);
    return count;
  }

  @Override
  public int delete(int likeNo) throws Exception {
    return likeDao.delete(likeNo);
  }

  @Override
  public int update(Like like) throws Exception {
    return likeDao.update(like);
  }
  
  
  @Override
  public int recentDelete(int likeNo) throws Exception {
    return likeDao.recentDelete(likeNo);
  }

  @Override
  public List<Like> getLikeList(int memberNo) throws Exception {
    return likeDao.getLikeList(memberNo);
  }
  
  @Override
  public List<Like> getrecentList(int memberNo) throws Exception {
    return likeDao.getrecentList(memberNo);
  }

  @Override
  public String check(int memberNo, int itemNo) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("memberNo", memberNo);
    paramMap.put("itemNo", itemNo);
    return likeDao.getOneLike(paramMap);
  }
  
}