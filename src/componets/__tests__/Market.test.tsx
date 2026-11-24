import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Market from '../Market'

vi.mock('../../assets/market/marketTitle.png', () => ({ default: 'marketTitle.png' }))

describe('Market', () => {
  it('shows the maintenance message', () => {
    render(<Market />)
    expect(screen.getByText(/down for maintenance/i)).toBeInTheDocument()
  })

  it('uses the same font class as the loading text', () => {
    render(<Market />)
    expect(screen.getByText(/down for maintenance/i)).toHaveClass('simple-text', 'waiting-msg')
  })

  it('renders the market title', () => {
    render(<Market />)
    expect(screen.getByAltText('market-title')).toBeInTheDocument()
  })
})
