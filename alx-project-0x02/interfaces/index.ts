export interface User {
    id: string;
    name: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostsPageProps {
  posts: PostProps[];
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  }
};