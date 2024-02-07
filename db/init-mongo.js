db.createUser(
    {
      user: "testuser",
      pwd: "JI5Jou8EXyAmk9B60D6mUY6ZlevmOiOX",
      roles:[
        {
          role:"readWrite",
          db:"datadb"
        }
      ]
    }
  )