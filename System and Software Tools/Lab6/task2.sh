#!/bin/bash

####################################
# Name: Khoa Tran
# CSE 391 - Autumn 2020
# Homework 6 - Task 2
####################################

function problem4 {
  # Type your answer to problem #4 below this line
  grep -E "[A-Za-z0-9][A-Za-z0-9._%+-]+@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{2,6}" emails.txt

}

function problem5 {
  # Type your answer to problem #5 below this line
  grep -P '(?=^.{8}$)(?=^[^\s]*$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])' passwords.txt
}

function problem6 {
  # Type your answer to problem #6 below this line
  grep -E "[4-5][0-9]{3}\s[0-9]{4}\s[0-9]{4}\s[0-9]{1}" cards.txt 
}
