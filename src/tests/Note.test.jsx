import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, describe } from 'vitest';
import Note from '../Note';


test('renders modify cancelled', async () => {
  const note = {
    title: 'Test Note',
    note: 15,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const editButton = screen.getByText('Modifier');
  await userEvent.click(editButton);

  const cancelButton = screen.getByText('Annuler');
  await userEvent.click(cancelButton);

  const titleElement = screen.getByText('Test Note');
  expect(titleElement).toBeInTheDocument();

  const gradeElement = screen.getByText(/Note: 15/i);
  expect(gradeElement).toBeInTheDocument();

  const commentElement = screen.getByText('Commentaire: This is a test');
  expect(commentElement).toBeInTheDocument();
});

test('renders modify correctly', async () => {
  const note = {
    title: 'Test Note',
    note: 15,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const editButton = screen.getByText('Modifier');
  await userEvent.click(editButton);

  const titleElement = screen.getByTestId('title_modify');
  expect(titleElement).toBeInTheDocument();

  const noteElement = screen.getByTestId('note_modify');
  expect(noteElement).toBeInTheDocument();

  const commentElement = screen.getByTestId('comment_modify');
  expect(commentElement).toBeInTheDocument();
});

test('renders note correctly', () => {
  const note = {
    title: 'Test Note',
    note: 15,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const titleElement = screen.getByText('Test Note');
  expect(titleElement).toBeInTheDocument();

  const gradeElement = screen.getByText(/Note: 15/i);
  expect(gradeElement).toBeInTheDocument();

  const commentElement = screen.getByText('Commentaire: This is a test');
  expect(commentElement).toBeInTheDocument();
});

test('renders color grenn correctly', () => {
  const note = {
    title: 'Test Note',
    note: 15,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const noteElement = screen.getByTestId('note-color');
  console.log(screen.getByTestId('note-color'))
  expect(noteElement).toHaveStyle("background-color: rgb(0, 128, 0)");

});

test('renders color orange correctly', () => {
  const note = {
    title: 'Test Note',
    note: 9,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const noteElement = screen.getByTestId('note-color');
  console.log(screen.getByTestId('note-color'))
  expect(noteElement).toHaveStyle("background-color: rgb(255, 165, 0)");

});

test('renders color red correctly', () => {
  const note = {
    title: 'Test Note',
    note: 7,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const noteElement = screen.getByTestId('note-color');
  console.log(screen.getByTestId('note-color'))
  expect(noteElement).toHaveStyle("background-color: rgb(255, 0, 0)");

});

test('renders color yellow correctly', () => {
  const note = {
    title: 'Test Note',
    note: 12,
    comment: 'This is a test',
    date: '2023-06-01',
  };

  render(<Note {...note}/>);

  const noteElement = screen.getByTestId('note-color');
  console.log(screen.getByTestId('note-color'))
  expect(noteElement).toHaveStyle("background-color: rgb(255, 255, 0)");

});