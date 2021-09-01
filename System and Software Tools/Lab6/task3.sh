#!/bin/bash

####################################
# Name: Khoa Tran
# CSE 391 - Autumn 2020
# Homework 6 - Task 3
####################################

function problem7 {
  # Type your answer to problem #7 below this line
  grep -P "(?=.*G)(?=.*A)(?=.*C)(?=.*T)" dna.txt 
}

function problem8 {
  # Type your answer to problem #8 below this line
  grep -E '\s+' dna.txt
}

function problem9 {
  # Type your answer to problem #9 below this line
  grep -A1 'CAT' dna.txt 
}

function problem10 {
  # Type your answer to problem #10 below this line
  grep -E '^(\w+)(\b.*\1)?$' dna.txt
}

function problem11 {
  # Type your answer to problem #11 below this line
  echo "not yet implemented"
}

function problem12 {
  # Type your answer to problem #12 below this line
  echo "not yet implemented"
}
