#!/bin/bash

####################################
# Name: Khoa Tran
# CSE 391 - Autumn 2020
# Homework 6 - Task 1
####################################

function problem1 {
  # Type your answer to problem #1 below this line
  grep -E '[0-9]+' names.txt
}

function problem2 {
  # Type your answer to problem #2 below this line
  grep -E '^[a-zA-Z]{4}$' names.txt
}

function problem3 {
  # Type your answer to problem #3 below this line
  grep -E '^[A-Z][a-z]+\s[A-Z][a-z]+$' names.txt
}
