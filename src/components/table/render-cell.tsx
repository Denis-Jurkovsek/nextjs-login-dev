import { Col, Row, Text, Tooltip, User } from '@nextui-org/react'
import React from 'react'

import { DeleteIcon } from '../icons/table/delete-icon'
import { EditIcon } from '../icons/table/edit-icon'
import { EyeIcon } from '../icons/table/eye-icon'
import type { users } from './data'
import { IconButton, StyledBadge } from './table.styled'

interface IRenderCellProps {
  user: (typeof users)[number]
  columnKey: string | React.Key
}

export const RenderCell = ({ user, columnKey }: IRenderCellProps) => {
  // @ts-ignore
  const cellValue = user[columnKey]
  switch (columnKey) {
    case 'name':
      return (
        <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
          {user.email}
        </User>
      )
    case 'role':
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: 'capitalize' }}>
              {cellValue}
            </Text>
          </Row>
          <Row>
            <Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}>
              {user.team}
            </Text>
          </Row>
        </Col>
      )
    case 'status':
      return (
        // @ts-ignore
        <StyledBadge type={String(user.status)}>{cellValue}</StyledBadge>
      )

    case 'actions':
      return (
        <Row justify='center' align='center' css={{ gap: '$8', '@md': { gap: 0 } }}>
          <Col css={{ d: 'flex' }}>
            <Tooltip content='Details'>
              <IconButton>
                <EyeIcon size={20} fill='#979797' />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: 'flex' }}>
            <Tooltip content='Edit user'>
              <IconButton>
                <EditIcon size={20} fill='#979797' />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: 'flex' }}>
            <Tooltip content='Delete user' color='error'>
              <IconButton>
                <DeleteIcon size={20} fill='#FF0080' />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      )
    default:
      return cellValue
  }
}
