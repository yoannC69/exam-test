import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, describe } from 'vitest';
import NoteList from '../NoteList';


test('render list of notes', async () => {
    const notes = [
        {
            title: 'Test Note',
            note: 15,
            comment: 'This is a test',
            date: '2023-06-01',
        },
        {
            title: 'Test Note2',
            note: 8,
            comment: 'This is a test2',
            date: '2023-06-02',
        }
    ];

  render(<NoteList notes={notes}/>);

  const note1 = screen.getByText('Test Note');
  expect(note1).toBeInTheDocument();
  const note2 = screen.getByText('Test Note2');
  expect(note2).toBeInTheDocument();

  const grade1 = screen.getByText('Note: 15');
  expect(grade1).toBeInTheDocument();
  const grade2 = screen.getByText('Note: 8');
  expect(grade2).toBeInTheDocument();

  const comment1 = screen.getByText('Commentaire: This is a test');
  expect(comment1).toBeInTheDocument();
  const comment2 = screen.getByText('Commentaire: This is a test2');
  expect(comment2).toBeInTheDocument();
});