import { createStyles, Table, Progress, Anchor, Text, Group, ScrollArea } from '@mantine/core';



interface TableReviewsProps {
  data: {
    from: string;
    subject: string;
  }[];
}

export function EmailList({ data }: TableReviewsProps) {


  const rows = data.map((row, index) => {


    return (
      <tr key={index}>
        <td>
          <Text<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.from}
          </Text>
        </td>
        <td>
          <Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.subject}
          </Anchor>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea style={{ height: '500px' }}>
      <Table verticalSpacing="xs">
        <thead>
          <tr>
            <th>From</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}