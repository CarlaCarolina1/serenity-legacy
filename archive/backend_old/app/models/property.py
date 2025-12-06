from datetime import datetime

from sqlalchemy import DateTime, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Property(Base):
    """Core property listing used for V1 static content."""

    __tablename__ = "properties"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str | None] = mapped_column(Text())
    price: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    beds: Mapped[int] = mapped_column(nullable=False, default=0)
    baths: Mapped[float] = mapped_column(nullable=False, default=0)
    square_feet: Mapped[int | None]
    city: Mapped[str] = mapped_column(String(120), nullable=False)
    state: Mapped[str] = mapped_column(String(2), nullable=False)
    neighborhood: Mapped[str | None] = mapped_column(String(120))
    status: Mapped[str] = mapped_column(String(50), default="Available")
    featured_image: Mapped[str | None] = mapped_column(String(255))

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=datetime.utcnow, nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )
