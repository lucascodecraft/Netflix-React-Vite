function numberToPercentage(number) {
    return (number / 10) * 100;
  }
  
export default function NumberToPercentage(props) {
  const percentage = numberToPercentage(props.voteAverage);

  return (percentage.toFixed(0));
}

