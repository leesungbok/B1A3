package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.Qna;

public interface QnaService {
  List<Qna> getList(int itemNo, boolean answerCheck, boolean questionCheck, String question, int pageNo, int pageSize) throws Exception;
  int addQuestion(int memberNo, int itemNo, String question) throws Exception;
  int addAnswer(String answer, int questionNo) throws Exception;
  int getSize(int itemNo, boolean answerCheck, boolean questionCheck, String question) throws Exception;
  int updateQuestion(String question, int questionNo) throws Exception;
  int deleteQuestion(int questionNo) throws Exception;
}