package bitcamp.java89.ems.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import bitcamp.java89.ems.domain.Qna;

public interface QnaDao {
  List<Qna> getList(
      @Param("itemNo") int itemNo,
      @Param("answerCheck") boolean answerCheck,
      @Param("questionCheck") boolean questionCheck,
      @Param("question") String question,
      @Param("startRowIndex")int startRowIndex,
      @Param("rowSize")int rowSize) throws Exception;
  int count(
      @Param("itemNo") int itemNo,
      @Param("answerCheck") boolean answerCheck,
      @Param("questionCheck") boolean questionCheck,
      @Param("question") String question) throws Exception;
  int insertQuestion(
      @Param("memberNo") int memberNo,
      @Param("itemNo") int itemNo,
      @Param("question") String question) throws Exception;
  int insertAnswer(
      @Param("answer") String answer,
      @Param("questionNo") int questionNo) throws Exception;
  int updateQuestion(
      @Param("question") String question,
      @Param("questionNo") int questionNo) throws Exception;
  int deleteQuestion(int questionNo) throws Exception;
}