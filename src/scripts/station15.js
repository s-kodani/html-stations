async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affilication: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affilication: "HogeHoge大学",
      is_student: true,
    },
  ];

  // 3秒待機
  const wait = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));
  await wait(3)

  const result = test(userList);
  return await result;
}

function test(userList) {
  userList = userList.map((data) => {
    data.full_name = data.family_name + " " + data.first_name;
    return data
  });
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  return userList;
}
