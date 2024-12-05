export default function divideFunction(numerator, denominator) {
  if denominator == 0:
	try{
          throw new Error('cannot divide by 0');
	} catch((err) => err)
  else:
	return(numerator / denoominator)
}
