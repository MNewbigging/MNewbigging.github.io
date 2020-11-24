async function testGetData() {
  console.log('getting data test...');

  const response = await fetch('dist/assets/word-data/a.txt');
  return response.text();
}

async function doTest() {
  console.log('starting test');

  const data = await testGetData();
  console.log('got data: ', data);
}

doTest();