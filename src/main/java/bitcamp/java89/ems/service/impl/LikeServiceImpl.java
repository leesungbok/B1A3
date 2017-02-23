package bitcamp.java89.ems.service.impl;

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

    if (like.getItemList().size() > 0) {
      likeDao.insert(like);
    }

    return count;
  }

  @Override
  public int delete(int likeNo) throws Exception {
    return likeDao.delete(likeNo);
  }

  @Override
  public List<Like> getLikeList() throws Exception {
    return likeDao.getLikeList();
  }
 
}