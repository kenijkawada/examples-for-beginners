// 簡易的なハッシュテーブルをJavaScriptで実装するために、シンプルなハッシュ関数と配列を使用します。
// この例では、文字列型のキーに対してハッシュ関数を適用し、結果として得られるハッシュ値を使って配列のインデックスを決定します。
// ハッシュ関数は基本的なものですが、実際のアプリケーションではより複雑で衝突を減らすためのハッシュ関数を使用する必要があります。
class HashTable {
  constructor(size = 20) {
    this.size = size;
    this.buckets = Array(size)
      .fill(null)
      .map(() => []);
  }

  // シンプルなハッシュ関数（文字列のキーに対して）
  hash(key) {
    let hash = 0;
    for (let char of key) {
      // charCodeAt() は文字列の指定された位置にある UTF-16 コードを表す 0 から 65535 までの整数を返します。
      hash = (hash + char.charCodeAt(0)) % this.size;
    }
    return hash;
  }

  // キーと値を追加（更新）
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find((item) => item.key === key);

    if (found) {
      found.value = value; // キーが見つかった場合は値を更新
    } else {
      bucket.push({ key, value }); // 新しいキーの場合は追加
    }
  }

  // キーに対応する値を取得
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find((item) => item.key === key);
    return found ? found.value : undefined;
  }

  // キーの存在を確認
  has(key) {
    return this.get(key) !== undefined;
  }

  // キーに対応する値を削除
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const itemIndex = bucket.findIndex((item) => item.key === key);

    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1); // アイテムを削除
      return true;
    }
    return false;
  }
}

// ハッシュテーブルの使用例
const hashTable = new HashTable();
hashTable.set("name", "John Doe");
hashTable.set("age", 30);
console.log(hashTable.get("name")); // "John Doe"
console.log(hashTable.get("age")); // 30
hashTable.set("age", 31); // 値を更新
console.log(hashTable.get("age")); // 31
hashTable.delete("age");
console.log(hashTable.has("age")); // false
