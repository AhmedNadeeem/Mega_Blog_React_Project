import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((res) => {
        if (res) {
          setPost(res);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return (
    <div className="p-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
