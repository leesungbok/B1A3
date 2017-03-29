-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
CREATE TABLE `MEMB` (
  `MNO`     INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `EMAIL`   VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
  `NKNM`    VARCHAR(6)   NOT NULL COMMENT '닉네임', -- 닉네임
  `PHON`    VARCHAR(30)  NOT NULL COMMENT '휴대폰', -- 휴대폰
  `PWD`     VARCHAR(50)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  `PATH`    VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  `PST_NO`  VARCHAR(10)  NULL     COMMENT '우편번호', -- 우편번호
  `BAS_ADR` VARCHAR(255) NULL     COMMENT '기본주소', -- 기본주소
  `DET_ADR` VARCHAR(255) NULL     COMMENT '상제주소', -- 상제주소
  `TEL`     VARCHAR(30)  NULL     COMMENT '전화번호', -- 전화번호
  `FCBK`    VARCHAR(30)  NULL     COMMENT '페이스북', -- 페이스북
  `KATOK`   VARCHAR(30)  NULL     COMMENT '카카오톡', -- 카카오톡
  `NAVER`   VARCHAR(30)  NULL     COMMENT '네이버' -- 네이버
)
COMMENT '회원';

-- 회원
ALTER TABLE `MEMB`
  ADD CONSTRAINT `PK_MEMB` -- 회원 기본키
    PRIMARY KEY (
      `MNO` -- 회원일련번호
    );

-- 이메일 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB`
  ON `MEMB` ( -- 회원
    `EMAIL` ASC -- 이메일
  );

-- 닉네임 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB2`
  ON `MEMB` ( -- 회원
    `NKNM` ASC -- 닉네임
  );

-- 휴대폰 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB3`
  ON `MEMB` ( -- 회원
    `PHON` ASC -- 휴대폰
  );

-- 페이스북 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB4`
  ON `MEMB` ( -- 회원
    `FCBK` ASC -- 페이스북
  );

-- 카카오톡 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB5`
  ON `MEMB` ( -- 회원
    `KATOK` ASC -- 카카오톡
  );

-- 네이버 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB6`
  ON `MEMB` ( -- 회원
    `NAVER` ASC -- 네이버
  );

ALTER TABLE `MEMB`
  MODIFY COLUMN `MNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 상품사진
CREATE TABLE `PHOT` (
  `PNO`  INTEGER      NOT NULL COMMENT '상품사진일련번호', -- 상품사진일련번호
  `ITNO` INTEGER      NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `PATH` VARCHAR(255) NOT NULL COMMENT '사진경로' -- 사진경로
)
COMMENT '상품사진';

-- 상품사진
ALTER TABLE `PHOT`
  ADD CONSTRAINT `PK_PHOT` -- 상품사진 기본키
    PRIMARY KEY (
      `PNO` -- 상품사진일련번호
    );

ALTER TABLE `PHOT`
  MODIFY COLUMN `PNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품사진일련번호';

-- 나의관심
CREATE TABLE `INTER` (
  `MNO`  INTEGER  NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `ITNO` INTEGER  NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `TYPE` INTEGER  NULL     COMMENT '유형', -- 유형
  `RDT`  DATETIME NULL     COMMENT '등록일' -- 등록일
)
COMMENT '나의관심';

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `PK_INTER` -- 나의관심 기본키
    PRIMARY KEY (
      `MNO`,  -- 회원일련번호
      `ITNO`  -- 상품일련번호
    );

-- 입찰기록
CREATE TABLE `BDHS` (
  `HSNO` INTEGER  NOT NULL COMMENT '입찰기록일련번호', -- 입찰기록일련번호
  `MNO`  INTEGER  NOT NULL COMMENT '입찰자', -- 입찰자
  `ITNO` INTEGER  NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `BIDS` INTEGER  NOT NULL COMMENT '입찰가', -- 입찰가
  `TIME` DATETIME NOT NULL COMMENT '입찰시간', -- 입찰시간
  `STAT` INTEGER  NOT NULL DEFAULT 0 COMMENT '결제상태' -- 결제상태
)
COMMENT '입찰기록';

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `PK_BDHS` -- 입찰기록 기본키
    PRIMARY KEY (
      `HSNO` -- 입찰기록일련번호
    );

ALTER TABLE `BDHS`
  MODIFY COLUMN `HSNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '입찰기록일련번호';

-- 상품
CREATE TABLE `ITEM` (
  `ITNO`  INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `MNO`   INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `TITL`  VARCHAR(30) NOT NULL COMMENT '제목', -- 제목
  `CATEG` VARCHAR(10) NOT NULL COMMENT '카테고리', -- 카테고리
  `BUY`   DATETIME    NOT NULL COMMENT '구입시기', -- 구입시기
  `DAY`   VARCHAR(30) NOT NULL COMMENT '사용일수', -- 사용일수
  `DEAL`  VARCHAR(10) NOT NULL COMMENT '거래방식', -- 거래방식
  `CONT`  TEXT        NULL     COMMENT '상세설명', -- 상세설명
  `TIME`  DATETIME    NOT NULL COMMENT '시작시간', -- 시작시간
  `STPC`  INTEGER     NOT NULL COMMENT '시작가' -- 시작가
)
COMMENT '상품';

-- 상품
ALTER TABLE `ITEM`
  ADD CONSTRAINT `PK_ITEM` -- 상품 기본키
    PRIMARY KEY (
      `ITNO` -- 상품일련번호
    );

ALTER TABLE `ITEM`
  MODIFY COLUMN `ITNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품일련번호';

-- 채팅
CREATE TABLE `CHAT` (
  `CHNO` INTEGER  NOT NULL COMMENT '채팅일련번호', -- 채팅일련번호
  `BMNO` INTEGER  NOT NULL COMMENT '보내는회원일련번호', -- 보내는회원일련번호
  `SMNO` INTEGER  NOT NULL COMMENT '판매자회원일련번호', -- 판매자회원일련번호
  `CONT` TEXT     NOT NULL COMMENT '내용', -- 내용
  `TIME` DATETIME NOT NULL COMMENT '보낸시간' -- 보낸시간
)
COMMENT '채팅';

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `PK_CHAT` -- 채팅 기본키
    PRIMARY KEY (
      `CHNO` -- 채팅일련번호
    );

ALTER TABLE `CHAT`
  MODIFY COLUMN `CHNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '채팅일련번호';

-- 낙찰품결제
CREATE TABLE `PAYMT` (
  `HSNO`  INTEGER      NOT NULL COMMENT '입찰기록일련번호', -- 입찰기록일련번호
  `PAY`   INTEGER      NOT NULL COMMENT '결제방법', -- 결제방법
  `RECV`  VARCHAR(10)  NOT NULL COMMENT '받으시는분', -- 받으시는분
  `DELIV` VARCHAR(255) NOT NULL COMMENT '배송지', -- 배송지
  `CONT`  TEXT         NULL     COMMENT '배송시요구사항' -- 배송시요구사항
)
COMMENT '낙찰품결제';

-- 낙찰품결제
ALTER TABLE `PAYMT`
  ADD CONSTRAINT `PK_PAYMT` -- 낙찰품결제 기본키
    PRIMARY KEY (
      `HSNO` -- 입찰기록일련번호
    );

-- 상품문의
CREATE TABLE `QNA` (
  `QNO`  INTEGER     NOT NULL COMMENT '상품문의일련번호', -- 상품문의일련번호
  `MNO`  INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `ITNO` INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `QUS`  VARCHAR(30) NOT NULL COMMENT '문의', -- 문의
  `QTM`  DATETIME    NOT NULL COMMENT '문의시간', -- 문의시간
  `ANS`  TEXT        NULL     COMMENT '답변', -- 답변
  `ATM`  DATETIME    NULL     COMMENT '답변시간' -- 답변시간
)
COMMENT '상품문의';

-- 상품문의
ALTER TABLE `QNA`
  ADD CONSTRAINT `PK_QNA` -- 상품문의 기본키
    PRIMARY KEY (
      `QNO` -- 상품문의일련번호
    );

ALTER TABLE `QNA`
  MODIFY COLUMN `QNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품문의일련번호';

-- 상품사진
ALTER TABLE `PHOT`
  ADD CONSTRAINT `FK_ITEM_TO_PHOT` -- 상품 -> 상품사진
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `FK_MEMB_TO_INTER` -- 회원 -> 나의관심
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `FK_ITEM_TO_INTER` -- 상품 -> 나의관심
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `FK_MEMB_TO_BDHS` -- 회원 -> 입찰기록
    FOREIGN KEY (
      `MNO` -- 입찰자
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `FK_ITEM_TO_BDHS` -- 상품 -> 입찰기록
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 상품
ALTER TABLE `ITEM`
  ADD CONSTRAINT `FK_MEMB_TO_ITEM` -- 회원 -> 상품
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `FK_MEMB_TO_CHAT` -- 회원 -> 채팅
    FOREIGN KEY (
      `SMNO` -- 판매자회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `FK_MEMB_TO_CHAT2` -- 회원 -> 채팅2
    FOREIGN KEY (
      `BMNO` -- 보내는회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 낙찰품결제
ALTER TABLE `PAYMT`
  ADD CONSTRAINT `FK_BDHS_TO_PAYMT` -- 입찰기록 -> 낙찰품결제
    FOREIGN KEY (
      `HSNO` -- 입찰기록일련번호
    )
    REFERENCES `BDHS` ( -- 입찰기록
      `HSNO` -- 입찰기록일련번호
    );

-- 상품문의
ALTER TABLE `QNA`
  ADD CONSTRAINT `FK_MEMB_TO_QNA` -- 회원 -> 상품문의
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 상품문의
ALTER TABLE `QNA`
  ADD CONSTRAINT `FK_ITEM_TO_QNA` -- 상품 -> 상품문의
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );
    