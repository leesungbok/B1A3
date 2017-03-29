package bitcamp.java89.ems.domain;

import java.io.Serializable;

public class Qna implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int    questionNo;
  protected int    memberNo;
  protected int    itemNo;
  protected String nickName;
  protected String question;
  protected String questionTime;
  protected String answer;
  protected String answerTime;

  public int getQuestionNo() {
    return questionNo;
  }

  public void setQuestionNo(int questionNo) {
    this.questionNo = questionNo;
  }

  public int getMemberNo() {
    return memberNo;
  }

  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }

  public int getItemNo() {
    return itemNo;
  }

  public void setItemNo(int itemNo) {
    this.itemNo = itemNo;
  }

  public String getNickName() {
    return nickName;
  }

  public void setNickName(String nickName) {
    this.nickName = nickName;
  }

  public String getQuestion() {
    return question;
  }

  public void setQuestion(String question) {
    this.question = question;
  }

  public String getQuestionTime() {
    return questionTime;
  }

  public void setQuestionTime(String questionTime) {
    this.questionTime = questionTime;
  }

  public String getAnswer() {
    return answer;
  }

  public void setAnswer(String answer) {
    this.answer = answer;
  }

  public String getAnswerTime() {
    return answerTime;
  }

  public void setAnswerTime(String answerTime) {
    this.answerTime = answerTime;
  }

  @Override
  public String toString() {
    return "Qna [questionNo=" + questionNo + ", memberNo=" + memberNo + ", itemNo=" + itemNo + ", nickName=" + nickName
        + ", question=" + question + ", questionTime=" + questionTime + ", answer=" + answer + ", answerTime="
        + answerTime + "]";
  }
}