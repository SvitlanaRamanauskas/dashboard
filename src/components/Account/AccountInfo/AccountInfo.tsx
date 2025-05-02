type Props = {
  accountName: string;
}

export const AccountInfo: React.FC<Props> = ({ accountName }) => {
  return (
    <div>{accountName}</div>
  )
}

export default AccountInfo;
