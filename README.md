# InstaLite
# Collaborators: Shruti Agarwal, Daniel Rohacs, Patrick Wu
# Overview

This project, InstaLite, is a social media platform based on Instagram and enhanced with unique features. Our project uses Node.js, JavaScript, ChromaDB, Amazon RDS, S3, EC2, Apache Kafka, Apache Spark, and React, to deliver an engaging user experience.

Users are able to provide relevant information to create an account, and customize their profile with a profile photo and hashtags representing their interests. The application then prompts the user to choose an IMDB actor to link with, displaying the 5 most similar actor photos calculated using vector similarity using their uploaded profile photo. Core functionalities include a dynamic feed showcasing posts (with comments and likes), using a ranking algorithm to display relevant content based on friendships and hashtags, and adding/removing friends. Users are also able to change their profile information (photo and hashtags), and other settings (email and password). The application also generates friend recommendations for users, based on their current friend network.

Additionally, users are able to invite other users to a chat session, which is persistent. Users can also create chat groups, with any users being able to leave the group at any time. Lastly, users are able to search for people, and for posts, implemented using retrieval-augmented generation over the indexed content of actors, movie reviews, and posts and using a Large Language Model to find the best matches.

# Screenshots
![image](https://github.com/zoramardjoko/instalite/assets/87042775/850cd43e-8faf-4280-8957-baf8c6a9d1ca)
![image](https://github.com/zoramardjoko/instalite/assets/87042775/f0624f78-67fa-4231-80ae-f9758ca148f4)
![image](https://github.com/zoramardjoko/instalite/assets/87042775/83d17e10-50b3-4dff-99df-049ccc7a3ce6)
![image](https://github.com/zoramardjoko/instalite/assets/87042775/e44c7db9-b5e4-4bf4-8c90-0ed0cb771ef7)
![image](https://github.com/zoramardjoko/instalite/assets/87042775/335842e5-50e4-41e9-bfae-54306d7cc841)
![image](https://github.com/zoramardjoko/instalite/assets/87042775/7ef86fe9-d687-4133-ba35-a214dc68bb6b)


