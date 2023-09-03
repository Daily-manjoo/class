import { gql } from "@apollo/client";

export const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`; //그래프큐엘 양식 가져오기

export const UPDATE_BOARD = gql`
  mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String) {
    updateBoard(number: $number, writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`; //그래프큐엘 양식 가져오기
